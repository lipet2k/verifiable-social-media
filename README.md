# check_mate: A New Verifiable Social Media

## Description

Modern social media has a tight grip on the content that is allowed and 

Our project harnesses the powerful features of both zero knowledge proofs and machine learning. 

## Dataset
(https://github.com/jubins/MachineLearning-Detecting-Twitter-Bots/blob/master/FinalProjectAndCode/kaggle_data/training_data_2_csv_UTF.csv)[https://github.com/jubins/MachineLearning-Detecting-Twitter-Bots/blob/master/FinalProjectAndCode/kaggle_data/training_data_2_csv_UTF.csv]. We tokenized and vectorized the text using nltk's Twitter tokenizer and the vectorizer from sklearn.

## Training

We trained 4 classifiers: a SVM, Multinomial Naive Bayes Classifier, Logistic Regression Classifier, and a DNN (https://github.com/zkonduit/ezkl)[https://github.com/zkonduit/ezkl] (although our attempts to get a CNN working was unsuccessful, we did make significant progress). 

## Results (Accuracy on Test Set)
SVM: 0.73
Multinomial Naive Bayes Classifier: 0.71
Logistic Regression Classifier: 0.72
Deep Neural Network: 0.56

Note: The Deep Neural Network was likely overfitting on the training data, and likely needs more features to be viable. However, there is a limit to the number of features we can implement in ezkl at the moment.

## Running the models

The models were trained on an A100 through Google Collab, to run the model use the Jupyter Notebook found under models.