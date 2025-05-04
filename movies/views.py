from django.shortcuts import render, get_object_or_404
from django.views import View
from django.views.generic import DetailView
from .models import Movie

# Function-Based View (FBV)
def movie_detail(request, pk):
    movie = get_object_or_404(Movie, pk=pk)
    return render(request, 'movie_detail.html', {'movie': movie})

# Class-Based View (CBV)
class MovieDetailView(View):
    def get(self, request, pk):
        movie = get_object_or_404(Movie, pk=pk)
        return render(request, 'movie_detail.html', {'movie': movie})

# Generic Class-Based View (GCBV)
class MovieDetailGCBV(DetailView):
    model = Movie
    template_name = 'movie_detail.html'
    context_object_name = 'movie'
