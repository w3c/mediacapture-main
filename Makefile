
all: getusermedia.diff.html 

clean:
	- rm -f *.svg *.png *.pdf   getusermedia.diff.html getusermedia.txt

getusermedia.txt: getusermedia.html
	html2text.py getusermedia.html | fold -bs -w 80 > getusermedia.txt

getusermedia.orig.txt: getusermedia.orig.html
	html2text.py getusermedia.orig.html | fold -bs -w 80 > getusermedia.orig.txt

getusermedia.diff.html: getusermedia.orig.txt getusermedia.txt
	htmlwdiff getusermedia.orig.txt getusermedia.txt > getusermedia.diff.html
