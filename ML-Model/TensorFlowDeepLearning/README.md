# Stroke Prediction using TensorFlow


To loead a fresh Keras model do the following: 

```
new_stroke_model = tf.keras.models.load_model('saved_model/stroke_model')

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
