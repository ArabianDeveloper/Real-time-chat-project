from django.http import JsonResponse
from django.shortcuts import render
from .models import Message

def index(request):
    return render(request, 'index.html')

def send_message(request):
    if request.method == 'POST':
        msg_content = request.POST.get('message')
        new_message = Message.objects.create(content=msg_content, sender=request.user)
        return JsonResponse({'status': 'success'})

def get_messages(request, last_id):
    # In a real app, you'd filter by 'room' or 'timestamp'
    messages = Message.objects.filter(id__gt=last_id).values('content', 'id', 'timestamp', 'sender__username')
    return JsonResponse({'messages': list(messages)})