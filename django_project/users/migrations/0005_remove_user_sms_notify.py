# Generated by Django 4.1.1 on 2022-11-08 18:42

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('users', '0004_user_phone_notify_alter_user_military_time'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='user',
            name='sms_notify',
        ),
    ]