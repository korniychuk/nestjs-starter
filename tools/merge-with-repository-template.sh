#!/usr/bin/env bash

declare -r prefixAwkPattern="{print \": \" \$0}"
declare -r colorGreen='\033[0;32m'
declare -r colorYellow='\033[0;33m'
declare -r colorBYellow='\033[1;33m'
declare -r colorNc='\033[0m' # No Color

declare -r tplRepoGit='git@github.com:korniychuk/wallaby-ts-starter.git'

function execute() {
  local -r command="${1}"; shift
  "${command}" "${@}" 2> >(awk "${prefixAwkPattern}" 1>&2) | awk "${prefixAwkPattern}"
}

execute echo '------------------------ Merge With Template :: BEGIN ------------------------'

if [[ "$(git remote -v 2> /dev/null | grep -E '^template')" == "" ]]; then
    execute git remote add template "${tplRepoGit}"
    execute echo "'template' origin added"
fi

execute git fetch template

if [[ "${1}" == "merge" ]]; then
  execute git merge --allow-unrelated-histories template/master --no-edit
elif [[ "${1}" == "check" ]]; then
  if [[ -z "$(git log HEAD..template/master --oneline)" ]]; then
    execute echo -e "${colorGreen}The template repository has not changed${colorNc}"
  else
    execute echo -e "${colorYellow}Warning! The template repository contains updates." \
                    "Execute '${colorBYellow}npm run tpl-repo:merge${colorYellow}' to apply the updates.${colorNc}" >&2
  fi
fi

execute echo '------------------------- Merge With Template :: END -------------------------'
