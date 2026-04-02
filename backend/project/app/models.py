from django.db import models

# # Create your models here.

class Order(models.Model):
    userName = models.CharField()
    userContact = models.CharField(max_length=10)
    address = models.TextField()
    bookName = models.CharField(max_length=50)
    author = models.CharField()
    quantity = models.IntegerField()
    bookPrice = models.IntegerField()
    totalPrice = models.IntegerField()
    paymentType = models.CharField()