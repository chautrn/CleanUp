# TODO:
# 1. Run 'python manage.py runserver'. Fix errors.

from django.db import models
from django.contrib.auth.models import User

class Pet(models.Model):
    name = models.CharField(max_length=50)

class Player(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    pet = models.OneToOneField(Pet, on_delete=models.CASCADE)
    is_display_name = models.BooleanField(default = False)
    is_displaying_location = models.BooleanField(default = False)
    is_donor = models.BooleanField(default= False)
    experience = models.IntegerField(default=0)
    
class Friendship(models.Model): 
    creator = models.ForeignKey(Player, related_name='creator-relation')
    friend = models.ForeignKey(Player, related_name='friend-relation')
    
