from django.urls import path
from . import views

urlpatterns = [
    path('login/', views.loginuser, name='loginuser'),
    path('register/', views.register, name='register'),
    path('logout/', views.logoutuser, name='logoutuser'),
]
