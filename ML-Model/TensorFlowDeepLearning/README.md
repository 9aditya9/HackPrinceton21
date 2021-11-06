# Stroke Prediction using TensorFlow


To loead a fresh Keras model do the following: 

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
Finally we convert the .pb model to tflite by using the following:

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
