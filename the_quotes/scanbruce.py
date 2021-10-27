#!/usr/local/bin/python3

# from html.parser import HTMLParser
import html
import re

blocktag = "<blockquote>"
filter1 = "<blockquote><p>"
filter2 = "</p></blockquote>"
filter3 = "Click to tweet"

notfiltered = []
quotes = []
count = 0

with open(r'bruce.html', mode='r') as f:
    for line in f.readlines():


        if blocktag in line:

            line = html.unescape(line)
            line = re.sub('<a.+?>', '', line)
            line = re.sub('<\/a>', '', line)
            line = re.sub('\(.+?\)', '', line)

            line = line.replace("<blockquote><p>", '')
            line = line.replace("</p></blockquote>", '')
            line = line.replace("Click to tweet", '')
            line = line.replace("Bruce Lee", '')
            line = line.replace("  ", ' ')
            quotes.append(line)

with open(r'myfile.txt', mode='w') as new_f:
    new_f.writelines(quotes)

with open(r'myfile.txt', mode='r') as read:
    for line in read.readlines(): # iterate thru the lines
        print(line)
