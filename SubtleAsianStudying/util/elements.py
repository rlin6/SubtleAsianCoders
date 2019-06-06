import json, os

try:
	os.chdir('/var/www/coders/coders/data')
	with open('elements.json','r') as f:
    		elements_dict=json.load(f)
except:
	with open('data/elements.json','r') as f:
	    elements_dict=json.load(f)
        
def getElement(symbol):
    for element in elements_dict:
        if element['symbol']==symbol:
            return element
        
def getMass(element):
    for e in elements_dict:
        if e['symbol']==element:
            return e['mass']

def getElectro(element):
    for e in elements_dict:
        if e['symbol']==element:
            return e['electronegativity']
        

def getRadius(element):
    for e in elements_dict:
        if e['symbol']==element:
            return e['atomicRadius']

def getState(element):
    for e in elements_dict:
        if e['symbol']==element:
            return e['state']

def getYear(element):
    for e in elements_dict:
        if e['symbol']==element:
            return e['year']
        
def getBlurb(element):
    for e in elements_dict:
        if e['symbol']==element:
            return e['blurb']
#print(getElement('H'))
#print(getMass('Hydrogen'))
