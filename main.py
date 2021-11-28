from flask import Flask, render_template, session, redirect, url_for
from flask_wtf import FlaskForm
from wtforms import StringField, SubmitField
from text_parser import mostCommonWords

import pandas as pd
import os


app = Flask(__name__)
SECRET_KEY = os.urandom(32)
app.config['SECRET_KEY'] = SECRET_KEY


#########################################################################
f = open('notif_data.txt',"r", encoding="utf-8")
f_list = f.read()
f_list = f_list.split('\n')

class UserForm(FlaskForm):
    most_common_words = mostCommonWords()
    notif_name1 = StringField('Уведомление о приглашении на участие в закупке по потребности')
    notif_name2 = StringField('Уведомление об отклонении заявки поставщиком')
    notif_name3 = StringField('Уведомление для поставщика о заключенном доп. соглашении')
    notif_name4 = StringField('Уведомление для поставщика о подписанном расторжении')
    notif_name5 = StringField('Уведомление для поставщика о заключенном контракте')
    notif_name6 = StringField('Уведомление поставщика о протоколе разногласий заказчика с контрактом')
    notif_name7 = StringField('Уведомление поставщика об отказе заказчика от заключения контракта')
    notif_name8 = StringField('Уведомление заказчика об отказе поставщика от заключения контракта')

    submit_word1 = SubmitField(most_common_words[0])
    submit_word2 = SubmitField(most_common_words[1])
    submit_word3 = SubmitField(most_common_words[2])
    submit_word4 = SubmitField(most_common_words[3])
    submit_word5 = SubmitField(most_common_words[4])

    submit = SubmitField("Подтвердить")


@app.route('/', methods=['GET', 'POST'])
def showHomePage():
    form = UserForm()
    mcv = form.most_common_words
    if form.validate_on_submit():
        session['notif_name1'] = form.notif_name1.data

        return redirect(url_for('data'))
    return render_template('index.html', form=form, notifications=f_list, commonwords=mcv)


@app.route('/data/', methods=['GET', 'POST'])
def data():
    dt = pd.read_excel('notif_data.xlsx')
    # data = data.to_dict()
    return render_template('data.html', tables=[dt.to_html(classes='data')], titles=dt.columns.values)


app.run('127.0.0.1', port=8200, debug=True)
