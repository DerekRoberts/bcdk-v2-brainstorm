#!/bin/bash
#
set -euo pipefail
[ ! "${VERBOSE:-}" == "true" ] || set -x

# Download and extract oc client to /usr/loca/bin
#
sudo su -c "curl https://mirror.openshift.com/pub/openshift-v3/clients/3.11.286/linux/oc.tar.gz | \
  tar zxf - -C /usr/local/bin \
"
