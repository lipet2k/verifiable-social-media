# check_mate: A New Verifiable Social Media

## Description

Introducing "Checkmate," the groundbreaking Zero-Knowledge Machine Learning Social Media application designed to revolutionize online interaction and data privacy. In a world where data breaches and privacy concerns are pervasive, Checkmate takes the stage with a powerful promise: Connect, Share, and Learn while keeping your personal information truly private.

Real People Redefined

Checkmate leverages the World Coin 0Auth to ensure all users are real and genuine, eliminating bots and preserving the authenticity of your connections. Moreover, you can remain completely anonymous while navigating Checkmate, guaranteeing privacy protection while proving your authenticity.

Zero Knowledge Proofs

Even with WorldCoin's 0Auth applications, authentic users can inadvertently become involved in malicious activities. While many social platforms deploy undisclosed algorithms to combat this issue, Checkmate employs zkML, providing transparency and accountability. Users can trust that every algorithmic action has a clear reason behind it, ensuring a safer online environment.

Empowerment Through Ownership

Hosted on the Polygon and Scroll networks, Checkmate ensures that your data is never deleted or tampered with in any way. Your information remains resilient, secure, and readily accessible, giving you full control and peace of mind.

Admin Features

Recognizing the imperfections of machine learning models, Checkmate includes administrative features, ensuring that essential tools are accessible to maintain a thriving community. Transparency and accountability are at the core of our platform.

Mobile First

Checkmate's responsive design prioritizes mobile browsing, delivering an enjoyable and seamless experience on small screens. Access the platform effortlessly, whether you're on the go or relaxing at home.


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

## Verifier Deployment to Scroll Network
Verifier deployed to 0x9e13eE946052a39Ba4bA07d047cac26aA26B353A
(This contract is too large to compile with the scrollscan web application so here is a published example of a Lock.js file published from the same address to prove that something was deployed: 0x86FdE99543f0490226aE40003c848F3AA53AB193).

## Verifier Deployment to Polygon Network
Verifier deployed to 0x5b99dF699A964ED73D5Da4752cCf4dBD7C7C5ACA
SocialMedia deployed to 0x8dbA78f88AE02Cc2F2A86E170Bb6346d73263D41