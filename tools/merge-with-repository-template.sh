#!/usr/bin/env bash

declare prefixAwkPattern="{print \": \" \$0}"

function execute() {
  exec "${@}" 2> >(awk "${prefixAwkPattern}" 1>&2) | awk "${prefixAwkPattern}"
}

echo
execute echo '------------------------ Merge With Template :: BEGIN ------------------------'
execute echo

if [[ "$(git remote -v 2> /dev/null | grep -E '^template')" == "" ]]; then
    execute git remote add template git@github.com:korniychuk/wallaby-ts-starter.git
    execute echo "'template' origin added"
fi

execute git fetch template

if [[ "${1}" == "merge" ]]; then
  execute git merge --allow-unrelated-histories template/master --no-edit
elif [[ "${1}" == "check" ]]; then
#  execute git merge --allow-unrelated-histories template/master --no-edit
  echo CHECK
fi

execute echo
execute echo '------------------------- Merge With Template :: END -------------------------'
echo
