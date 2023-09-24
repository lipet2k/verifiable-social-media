import nltk
import json
import numpy as np
import pandas as pd
from nltk.tokenize import TweetTokenizer
from sklearn.feature_extraction.text import CountVectorizer

nltk.download('punkt')

tk = TweetTokenizer()
vectorizer = CountVectorizer(max_features=36)

df_data = pd.read_csv('../security_dataset/github_data_UTF.csv')
df_data = df_data.iloc[:13500000]

vectorizer.fit_transform(X_train)

def clean_text(text):
  if type(text) is str:
    text = tk.tokenize(text)
    return ' '.join(text)
  return ""

def create_input_json(text):
    text = clean_text(text)
    
    X_test_vec = vectorizer.transform([text])
    dense_x = np.asarray(X_test_vec.todense()).astype(float).tolist()

    data = dict(input_data=[dense_x])
    json.dump(data, open('input.json', 'w'))