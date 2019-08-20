from employee import views
from django.urls import path

urlpatterns = [
    path('api/v1/employee/', views.EmployeeListCreateGet.as_view(), name='getAndPost'),
    path('api/v1/employee/<int:pk>/', views.EmployeeDeleteUpdate.as_view(), name='updateAndDelete'),
]