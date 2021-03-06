
## Brain Health Detection Using HOTG-AI's Rune

Brain Health Detection uses Machine Learning Model deployed via HOTG' Rune to predict the likelihood of a stroke. This project was built with the goal to help professionals and hearth patients. 

![Brain Health Detection](https://github.com/9aditya9/HackPrinceton21/blob/main/images/codegitpod.png)

### Why Stroke Prediction? 

A Stroke is a serious life threatening condition that effect 790,000 people in the United States every year[ [1](https://www.cdc.gov/stroke/facts.htm)]. Only 1 in 4 of these individual had a stroke before. During a stroke the blood supply to the brain is cut off. There are several risk factors that cause an individual to be prone to a stroke, e.g. age, smoking, high blood plessure etc...

Symptoms may vary from person to person [[2](https://www.nhs.uk/conditions/stroke/)], at times symptoms may be minor that a person ignores them.  Raising awerness about this issue was one of the reason we build a system for Brain Stroke Detection.  The aim is to support hearth patient and non, as well as professional and health care institution.
Our project predicts the likelihood of a patient or a person   of having a stroke  on the basis of 11 categories.  Once the data are entered and submitted the ML model will return the probability for the event to occour. For this project we have used Numpy, Pandas, TensorFlow, HOTG's Rune and React.

## Requirments

```
- Google Colab
- Kaggle Dataset can be found ![here](https://www.kaggle.com/fedesoriano/stroke-prediction-dataset)
- Python 3.7
- Numpy
- Rune
- GitPod - to access it simply type https://gitpod.io#/<gitrepo url>
```

### FrontEnd 

 ![Form](https://github.com/9aditya9/HackPrinceton21/blob/main/images/questions.png)
 
 The user will enter answer to particular categories which will then be encoded into numbers. These numbers will create the input vector for the model that will then return a probability.

### Backend

The backend can be found in the Backend folder where the machine learning models, datasets, .yml, .rune and .tflite files are stored. We have used TensorFlow for this particula projects and the highest accuracy achieved was `96.23%`. 


The model architecture used is the following:

```
def create_model():
      nn_model = tf.keras.models.Sequential([
           tf.keras.layers.Flatten(input_shape=(1, 10)),
           tf.keras.layers.Dense(25, activation='relu'),
           tf.keras.layers.Dense(25, activation='relu'),

         tf.keras.layers.Dense(1, activation='sigmoid')
       ])

      nn_model.compile('adam','binary_crossentropy',metrics=['accuracy'])
      return nn_model


```

## Folder Structure

See below the folder structure for a better understanding:


```
 FrontEnd
       ????????? package.json
       ????????? public
       ???   ????????? favicon.ico
       ???   ????????? index.html
       ???   ????????? logo192.png
       ???   ????????? logo512.png
       ???   ????????? manifest.json
       ???   ????????? robots.txt
       ????????? README.md
       ????????? src
       ???   ????????? App.css
       ???   ????????? App.test.tsx
       ???   ????????? App.tsx
       ???   ????????? index.css
       ???   ????????? index.tsx
       ???   ????????? logo.svg
       ???   ????????? react-app-env.d.ts
       ???   ????????? reportWebVitals.ts
       ???   ????????? setupTests.ts
       ????????? tsconfig.json
       ????????? yarn.lock
 
Backend
      .
      ????????? XGBoost_Reference
      ????????? TensorFlowDeepLearning
      ???   ????????? rune
      ???   ????????? saved_tf_model/
      ???   ????????? stroke_tflite_models/
      ???   ????????? training_1/
      ???   ????????? README.md
      ???   ????????? stroke_tf_prediction_model_final.ipynb
      ????????? README.md
      ????????? datasets
          ????????? encoded-healthcare-dataset-stroke-data.csv
          ????????? healthcare-dataset-stroke-data.csv


```


#### Machine Learning Model using TensorFlow


To load a fresh Keras model do the following: 

```
new_stroke_model = tf.keras.models.load_model('saved_tf_model/stroke_model')

# Check its architecture
new_stroke_model.summary()
```

To Evaluate this new model use the following

```
# Evaluate the restored model
loss, acc = new_stroke_model.evaluate(x_test, y_test, verbose=2)
print('Restored model, accuracy: {:5.2f}%'.format(100 * acc))

print(new_stroke_model.predict(x_test).shape)
```
We then train the model

```
new_stroke_model.fit(x_train, y_train, epochs=11)
```
Finally we convert the .pb model to tflite and save by using:

```
converter = tf.lite.TFLiteConverter.from_keras_model(new_stroke_model)
```

then 
 ```
 converter.target_ops = [tf.lite.OpsSet.TFLITE_BUILTINS, tf.lite.OpsSet.SELECT_TF_OPS]
converter.allow_custom_ops=True
converter.experimental_new_converter =True
tflite_model = converter.convert()
```

```
converter = tf.lite.TFLiteConverter.from_keras_model(new_stroke_model)
converter.optimizations = [tf.lite.Optimize.DEFAULT]
```

```
 converter.target_ops = [tf.lite.OpsSet.TFLITE_BUILTINS, tf.lite.OpsSet.SELECT_TF_OPS]
converter.allow_custom_ops=True
converter.experimental_new_converter =True
tflite_model = converter.convert()
```


## Access GitPod and Run Runes


To access GitPod and be able to deploy this application, simply navigate to 

[![Open in Gitpod](https://gitpod.io/button/open-in-gitpod.svg)](https://gitpod.io/#https://github.com/9aditya9/HackPrinceton21)

We suggest to go through the tutorials [here]() they were very helpful. When accessing the Tutorials workspace type `rune`. If that does not work navigate to the rune folder and run:

```
unzip rune.x86_64-unknown-linux-gnu.zip && mv rune ~/.cargo/bin && cd ~/.cargo/bin && chmod +x rune
```

Regarding our project workspace, navigate in TensorFlowModelDeepLearning/rune and type the following:

```
unzip rune.x86_64-unknown-linux-gnu.zip && mv rune ~/.cargo/bin && cd ~/.cargo/bin && chmod +x rune && cd /workspace/HackPrinceton21/ML-Model/TensorFlowDeepLearning/stroke_tflite_models && clear
```

The next step was to write the `Runefile.yml` file in the `stroke_tflite_models` directory. To do so we followed the documentation [here](https://hotg.dev/docs/reference/runefile_yml/)

Runefile.yml declares how the machine learning pipeline is configured. 

Once  `Runefile.yml` is built using `rune build Runefile.yml`, we can test our model. 

In this case we tried the following:

```
rune run stroke_tflite_models.rune --raw ../../dataset/encoded-healthcare-dataset-stroke-data.csv
```

this gives us the following,

```

$ rune run stroke_tflite_models.rune --raw ../../dataset/encoded-healthcare-dataset-stroke-data.csv
{"type_name":"f32","channel":2,"elements":[1.0],"dimensions":[1,1]}
```



