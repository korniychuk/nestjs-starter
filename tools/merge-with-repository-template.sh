#!/usr/bin/env bash

declare prefixAwkPattern="{print \"[Merge With Template]: \" \$0}"

function execute() {
  exec "${@}" 2> >(awk "${prefixAwkPattern}" 1>&2) | awk "${prefixAwkPattern}"
}

if [[ "$(git remote -v 2> /dev/null | grep -E '^template')" == "" ]]; then
    execute git remote add template git@github.com:korniychuk/wallaby-ts-starter.git
    execute echo "'template' origin added"
fi

execute git fetch template
execute git merge --allow-unrelated-histories template/master --no-edit
