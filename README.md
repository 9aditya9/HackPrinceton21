
## Stroke Prediction using Hot-G's API

### WHy Stroke Prediction? 

## Requirments




### FrontEnd 
 {add your description here of how the user navigation works}

### Backend

The backend can be found in the ML-model folder where the machine learning models, datasets, .yml, .rune and .tflite files are stored

## Folder Structure

See below the folder structure for a better understanding:


```



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

[![Open in Gitpod](https://gitpod.io/button/open-in-gitpod.svg)](gitpod.io/#https://github.com/9aditya9/HackPrinceton21/tree/main/ML-Model/TensorFlowDeepLearning)

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
{"type_name":"f32","channel":2,"elements":[0.0],"dimensions":[1,1]}
```



