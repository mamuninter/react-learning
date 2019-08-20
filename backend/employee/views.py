from django.shortcuts import render
from . models import Employee
from . serializers import  EmployeeSerializers
from rest_framework.generics import (
    ListAPIView,
    DestroyAPIView,
    CreateAPIView,
    UpdateAPIView,
    RetrieveAPIView
)

# def homeView(request): #index page
#     return render(request, 'index.html') #this template in base template directory


#################################
# All the API views are given below
################################    

# below are GET/POST Method
class EmployeeListCreateGet(ListAPIView, CreateAPIView):
    queryset = Employee.objects.all()
    serializer_class = EmployeeSerializers


# This is delete/update method
class EmployeeDeleteUpdate(DestroyAPIView, UpdateAPIView, RetrieveAPIView):
    queryset = Employee.objects.all()
    serializer_class = EmployeeSerializers
    lookup_field = 'pk'