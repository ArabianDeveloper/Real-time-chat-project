from django.shortcuts import render, redirect
from django.contrib.auth import logout, login
from django.contrib import messages
from django.contrib.auth.forms import UserCreationForm

# Create your views here.

def logout_view(request):
    logout(request)
    # Adding a message lets the user know they logged out successfully
    messages.info(request, "You have been logged out.")
    return redirect('login')


def signup(request):
    if request.method == 'POST':
        form = UserCreationForm(request.POST)
        if form.is_valid():
            user = form.save()
            username = form.cleaned_data.get('username')
            login(request, user)
            messages.success(request, f"Welcome to the chat, {username}!")
            return redirect('chat_room')
        else :
            messages.error(request, "There was an error creating your account. Please check the form and try again.")
    else:
        form = UserCreationForm()
    return render(request, 'auth/signup.html', {'form': form})