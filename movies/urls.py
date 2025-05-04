from django.urls import path
from .views import movie_detail, MovieDetailView, MovieDetailGCBV

urlpatterns = [
    path('movie/<int:pk>/', movie_detail, name='movie_detail_fbv'),          # Function-Based View
    path('movie_class/<int:pk>/', MovieDetailView.as_view(), name='movie_detail_cbv'),  # Class-Based View
    path('movie_generic/<int:pk>/', MovieDetailGCBV.as_view(), name='movie_detail_gcbv'),  # Generic CBV
]
