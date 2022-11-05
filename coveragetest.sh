#!/bin/bash
# Script for greater than numeric comparison
chmod -R 644 /tmp/result*
covcurrent=`cat /tmp/result`
#covprev=`cat /tmp/result-moved`
covprev=20.4
echo "Current coverage = $covcurrent; Previous coverage = $covprev;"

if [ ${covcurrent%.*} -eq ${covprev%.*} ] && [ ${covcurrent#*.} \> ${covprev#*.} ] || [ ${covcurrent%.*} -gt ${covprev%.*} ]; then
  echo "${covcurrent} > ${covprev}";
  exit 0
else
  echo "${covcurrent} <= ${covprev}";
  exit 1
fi