// Generated by view binder compiler. Do not edit!
package com.example.reviewmate.databinding;

import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.EditText;
import android.widget.ImageView;
import android.widget.RatingBar;
import android.widget.RelativeLayout;
import android.widget.TextView;
import androidx.annotation.NonNull;
import androidx.annotation.Nullable;
import androidx.appcompat.widget.Toolbar;
import androidx.viewbinding.ViewBinding;
import androidx.viewbinding.ViewBindings;
import com.example.reviewmate.R;
import java.lang.NullPointerException;
import java.lang.Override;
import java.lang.String;

public final class ActivityUpdateBinding implements ViewBinding {
  @NonNull
  private final RelativeLayout rootView;

  @NonNull
  public final EditText addEditView;

  @NonNull
  public final ImageView addImageView;

  @NonNull
  public final EditText addTitleEditView;

  @NonNull
  public final TextView movieId;

  @NonNull
  public final RatingBar movieRate;

  @NonNull
  public final TextView movieTitle;

  @NonNull
  public final Toolbar toolbarBack;

  private ActivityUpdateBinding(@NonNull RelativeLayout rootView, @NonNull EditText addEditView,
      @NonNull ImageView addImageView, @NonNull EditText addTitleEditView,
      @NonNull TextView movieId, @NonNull RatingBar movieRate, @NonNull TextView movieTitle,
      @NonNull Toolbar toolbarBack) {
    this.rootView = rootView;
    this.addEditView = addEditView;
    this.addImageView = addImageView;
    this.addTitleEditView = addTitleEditView;
    this.movieId = movieId;
    this.movieRate = movieRate;
    this.movieTitle = movieTitle;
    this.toolbarBack = toolbarBack;
  }

  @Override
  @NonNull
  public RelativeLayout getRoot() {
    return rootView;
  }

  @NonNull
  public static ActivityUpdateBinding inflate(@NonNull LayoutInflater inflater) {
    return inflate(inflater, null, false);
  }

  @NonNull
  public static ActivityUpdateBinding inflate(@NonNull LayoutInflater inflater,
      @Nullable ViewGroup parent, boolean attachToParent) {
    View root = inflater.inflate(R.layout.activity_update, parent, false);
    if (attachToParent) {
      parent.addView(root);
    }
    return bind(root);
  }

  @NonNull
  public static ActivityUpdateBinding bind(@NonNull View rootView) {
    // The body of this method is generated in a way you would not otherwise write.
    // This is done to optimize the compiled bytecode for size and performance.
    int id;
    missingId: {
      id = R.id.addEditView;
      EditText addEditView = ViewBindings.findChildViewById(rootView, id);
      if (addEditView == null) {
        break missingId;
      }

      id = R.id.addImageView;
      ImageView addImageView = ViewBindings.findChildViewById(rootView, id);
      if (addImageView == null) {
        break missingId;
      }

      id = R.id.addTitleEditView;
      EditText addTitleEditView = ViewBindings.findChildViewById(rootView, id);
      if (addTitleEditView == null) {
        break missingId;
      }

      id = R.id.movieId;
      TextView movieId = ViewBindings.findChildViewById(rootView, id);
      if (movieId == null) {
        break missingId;
      }

      id = R.id.movieRate;
      RatingBar movieRate = ViewBindings.findChildViewById(rootView, id);
      if (movieRate == null) {
        break missingId;
      }

      id = R.id.movieTitle;
      TextView movieTitle = ViewBindings.findChildViewById(rootView, id);
      if (movieTitle == null) {
        break missingId;
      }

      id = R.id.toolbar_back;
      Toolbar toolbarBack = ViewBindings.findChildViewById(rootView, id);
      if (toolbarBack == null) {
        break missingId;
      }

      return new ActivityUpdateBinding((RelativeLayout) rootView, addEditView, addImageView,
          addTitleEditView, movieId, movieRate, movieTitle, toolbarBack);
    }
    String missingId = rootView.getResources().getResourceName(id);
    throw new NullPointerException("Missing required view with ID: ".concat(missingId));
  }
}