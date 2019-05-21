from flask import Flask
from flask_restful import Api, Resource, reqparse

app = Flask(__name__)
api = Api(app)

elements = [
    {
        "name": "Hydrogen",
        "symbol": "H",
        "atomic number": 1,
        "atomic mass": 1.00794
    },
]

class Element(Resource):
    def get(self, name):
        for e in elements:
            if(name == e["name"]):
                return e, 200
        return "Element not found", 404

api.add_resource(Element, "/elements")

if __name__ == "__main__":
    app.debug = True
    app.run()
