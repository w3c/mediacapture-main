all: getusermedia.diff.html

clean::
	- rm -f *.svg *.png *.pdf getusermedia.diff.html getusermedia.txt getusermedia.orig.txt

getusermedia.txt: getusermedia.html
	html2text.py getusermedia.html | fold -bs -w 80 > getusermedia.txt

getusermedia.orig.txt: getusermedia.orig.html
	html2text.py getusermedia.orig.html | fold -bs -w 80 > getusermedia.orig.txt

getusermedia.diff.html: getusermedia.orig.txt getusermedia.txt
	htmlwdiff getusermedia.orig.txt getusermedia.txt > getusermedia.diff.html

tidy-test:
	$(TIDY) -config $(TIDYCONF) -o tidy.html -f tidy.err getusermedia.html
	html2text.py tidy.html | fold -bs -w 80 > tidy.txt
	htmlwdiff getusermedia.txt tidy.txt > tidy.diff.html
	grep -v "not approved by W3C" < tidy.err

include webrtc-respec-ci/Makefile

# Import the respec CI Makefile
webrtc-respec-ci/Makefile:
	git clone --depth 5 https://github.com/w3c/webrtc-respec-ci $(dir $@)

update::
	git -C webrtc-respec-ci pull
