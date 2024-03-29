from flask import Flask, request, render_template
app = Flask(__name__, template_folder='templates', static_url_path='')
from util import elements as chempy

@app.route("/")
def home():
    return render_template('index.html')

@app.route("/chem")
def chemistry():
    return render_template('chemistry.html')

@app.route("/physics")
def physics():
    return render_template('physics.html')
'---------------------------------  PHYSICS  -----------------------'
@app.route("/electric")
def magnet():
    return render_template('electric.html')

@app.route("/projectile")
def projectile():
    return app.send_static_file('Projectile.html')

@app.route("/coulomb")
def cou():
    return app.send_static_file('Coulomb.html')

'---------------------------------  CHEMISTRY -----------------------'

@app.route("/receive", methods=['GET','POST'])
def choose():
    eL=request.args['chosen']
    elementList=eL.split(', ')
    print(elementList)
    displayStr=''
    for i in elementList:
        #print(i)
        displayStr+=i
        displayStr+=', '
    displayStr = displayStr[:len(displayStr)-2]

    massList=[chempy.getMass(i) for i in elementList]
    electroList=[chempy.getElectro(i) for i in elementList]
    radiusList=[chempy.getRadius(i) for i in elementList]
    stateList=[chempy.getState(i) for i in elementList]
    yearList=[chempy.getYear(i) for i in elementList]
    blurbList=[chempy.getBlurb(i) for i in elementList]

    return render_template('chosen.html',eList=elementList, dStr=displayStr, mList=massList,
                           electroList=electroList, rList=radiusList, sList=stateList,
                           yList=yearList,bList=blurbList)


if __name__ == "__main__":
    app.debug = True
    app.run()
