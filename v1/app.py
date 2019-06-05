from flask import Flask, request, render_template
import elements as chempy
app = Flask(__name__, template_folder='templates')

@app.route("/")
def chemistry():
    return render_template('chemistry.html')

@app.route("/physics")
def physics():
    return render_template('physics.html')

@app.route("/receive", methods=['GET','POST'])
def choose():
    elementList=request.form.getlist('type')
    displayStr=''
    for i in elementList:
        print(i)
        displayStr+=i
        displayStr+=', '
        
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
