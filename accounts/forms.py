from django import forms
from django.contrib.auth.models import User
from django.contrib.auth.forms import UserCreationForm

class UserRegisterForm(UserCreationForm):
    GENDER_MALE = 0
    GENDER_FEMALE = 1
    MENS_FELLOWSHIP = 0
    WOMEN_FELLOWSHIP = 1
    YAF = 2
    YPG = 3
    JY = 4
    surname = forms.CharField(max_length=200)
    firstname = forms.CharField(max_length=200)
    othernames = forms.CharField(max_length=200,required=False)
    email = forms.EmailField(required=False)
    GENDER_CHOICES = [(GENDER_MALE, 'male'), (GENDER_FEMALE, 'female')]
    gender = forms.ChoiceField(choices=GENDER_CHOICES)
    birthday = forms.DateField(widget=forms.SelectDateWidget)
    phone_number = forms.CharField(max_length=12)
    location = forms.CharField(max_length=100)
    house_address = forms.CharField(max_length=150)
    GROUP_CHOICES = [(MENS_FELLOWSHIP, "Men's-Fellowship"), (WOMEN_FELLOWSHIP, "Women's-Fellowship"),
                     (YAF, 'YAF'), (YPG, 'YPG'), (JY, 'JY')]
    group = forms.ChoiceField(choices=GROUP_CHOICES)

    class Meta:
        model = User
        fields = ['username', 'surname', 'firstname', 'othernames', 'password1', 'password2', 'email','gender',
                  'birthday', 'phone_number', 'location', 'house_address','group']
