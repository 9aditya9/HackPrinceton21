To save the model simply use the following: 

```
import pickle
pickle.dump(xgb_model,open("stroke_model.pkl", "wb"))

```

To load and use the model do the following: 

```
filename = "stroke_model.pkl"
loaded_xgb_model = pickle.load(open(filename, 'rb'))
result = loaded_model.score(X_test, Y_test)
print(result)
```
