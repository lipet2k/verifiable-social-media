import nltk
import json
import numpy as np
from nltk.tokenize import TweetTokenizer
from sklearn.feature_extraction.text import CountVectorizer

nltk.download('punkt')

tk = TweetTokenizer()

def clean_text(text):
  if type(text) is str:
    text = tk.tokenize(text)
    return ' '.join(text)
  return ""

def create_input_json(text):
    text = clean_text(text)
    vectorizer = CountVectorizer(max_features=36)
    X_test_vec = vectorizer.transform([text])
    dense_x = np.asarray(X_test_vec.todense()).astype(float).tolist()

    data = dict(input_data=[dense_x])
    json.dump(data, open('input.json', 'w'))