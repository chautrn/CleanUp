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
    creator = models.ForeignKey(Player, related_name='creator_relation', on_delete=models.CASCADE)
    friend = models.ForeignKey(Player, related_name='friend_relation', on_delete=models.CASCADE)
    following = models.ForeignKey(Player, related_name='friend_set', on_delete=models.CASCADE) 

class Posts(models.Model):
    title = models.CharField(max_length=200)
    pub_date = models.DateTimeField('Date Published')
    photo = models.ImageField(upload_to='posts')
    pub_user = models.ForeignKey(Player, on_delete=models.CASCADE)
    caption = models.TextField(max_length=1000)
    likes = models.IntegerField(default=0)
    comments = models.CharField(max_length=200)
