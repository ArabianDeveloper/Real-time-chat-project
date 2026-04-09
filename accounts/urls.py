from django.urls import path
from django.contrib.auth import views as auth_views
from . import views

urlpatterns = [
    # signup: We'll create a custom view for this
    path('signup/', views.signup, name='signup'),

    # Login: Uses built-in view, we just provide the template
    path('login/', auth_views.LoginView.as_view(template_name='auth/login.html'), name='login'),
    
    # Logout: We'll create a custom view to handle the redirect
    path('logout/', views.logout_view, name='logout'),
]
