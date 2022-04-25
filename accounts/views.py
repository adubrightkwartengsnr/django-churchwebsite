from django.contrib import messages
from django.contrib.auth import login,logout,authenticate
from django.contrib.auth.forms import AuthenticationForm
from django.shortcuts import render, redirect
from .forms import UserRegisterForm


# Create your views here.
def loginuser(request):
    form = AuthenticationForm(request.POST)
    if request.method == 'GET':
        return render(request, 'accounts/login.html', {'form': form})
    else:
        user = authenticate(request, username= request.POST['username'], password =request.POST['password'])
        if user is None:
            messages.warning(request,f'Username and password do not match')
            return redirect('loginuser')
        else:
            login(request,user)
            return redirect('home')

def register(request):
    if request.method == 'POST':
        form = UserRegisterForm(request.POST)
        if form.is_valid():
            form.save()
            username = form.cleaned_data.get('username')
            messages.success(request, f'Account successfuly created for {username}!. You can now login :')
            return redirect('loginuser')
    else:
        form = UserRegisterForm(request.POST)
    return render(request, 'accounts/register.html', {'form': form})


def logoutuser(request):
    if request.method == 'POST':
        logout(request)
        return redirect('home')
