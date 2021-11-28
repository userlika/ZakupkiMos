import re
import string

import nltk

from nltk import word_tokenize
from nltk.probability import FreqDist
from nltk.corpus import stopwords

# nltk.download('punkt')
# nltk.download('stopwords')
# nltk.download('corpus')

string.punctuation

f = open('user_data_to parse.txt', "r", encoding="utf-8")
text = f.read()
len(text)

text = text.lower()

spec_chars = string.punctuation + '\n\xa0«»\t—…'

text = "".join([ch for ch in text if ch not in spec_chars])
text = re.sub('\n', '', text)


def remove_chars_from_text(text, chars):
    return "".join([ch for ch in text if ch not in chars])


text = remove_chars_from_text(text, spec_chars)
text = remove_chars_from_text(text, string.digits)

text_tokens = word_tokenize(text)

text = nltk.Text(text_tokens)


russian_stopwords = stopwords.words("russian")
#russian_stopwords.extend(['это'])


text_tokens = [token.strip() for token in text_tokens if token not in russian_stopwords]
text = nltk.Text(text_tokens)


def mostCommonWords():
    fdist_sw = FreqDist(text)
    fdist_sw = fdist_sw.most_common(5)

    fdist_words = []
    for elem in fdist_sw:
        fdist_words.append(elem[0])
    return fdist_words
