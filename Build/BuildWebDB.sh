DIRECTORY="./Fragments/"
DB="../DB/"
OUTPUT="../JS/Shooter/WebDB.js"

cat ${DIRECTORY}WebDBHead.jsf > ${OUTPUT}

sed -i 's/\r$//' WebDBList.txt

while read LINE; do
	echo "\"${LINE}\":" >> ${OUTPUT}
	cat ${DB}${LINE}.json >> ${OUTPUT}
	echo "," >> ${OUTPUT}
done < WebDBList.txt

sed -i '$ s/.$//' ${OUTPUT}

cat ${DIRECTORY}WebDBBody.jsf >> ${OUTPUT}
