from __future__ import absolute_import, unicode_literals

from celery import shared_task
from time import sleep
import logging
from django.core.mail import send_mail

# from django_project.core.management.commands import update_courses
# from celery import

@shared_task
def add(x, y):
    f = open('pythontesting6.txt', 'a')
    f.write(' ^ ' + '\n')
    f.flush()
    f.close()
    send_mail('Celery task worked',
    'Proof email works',
    'amatuccikristov@gmail.com',
    ['devinkristopher@gmail.com'])
    

# @shared_task
# def writer():
#     f = open('pythontesting.txt', 'a')
#     f.write('mmm', file=f)
#     f.close()
#     return None


@shared_task
def send_celery_mail():
    send_mail('Celery task worked',
    'Proof email works',
    'amatuccikristov@gmail.com',
    ['devinkristopher@gmail.com'])
    return None