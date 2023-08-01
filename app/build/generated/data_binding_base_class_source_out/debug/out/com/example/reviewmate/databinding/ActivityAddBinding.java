// Generated by view binder compiler. Do not edit!
package com.example.reviewmate.databinding;

import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.EditText;
import android.widget.ImageView;
import android.widget.LinearLayout;
import android.widget.TextView;
import androidx.annotation.NonNull;
import androidx.annotation.Nullable;
import androidx.viewbinding.ViewBinding;
import androidx.viewbinding.ViewBindings;
import com.example.reviewmate.R;
import com.google.android.material.floatingactionbutton.ExtendedFloatingActionButton;
import java.lang.NullPointerException;
import java.lang.Override;
import java.lang.String;

public final class ActivityAddBinding implements ViewBinding {
  @NonNull
  private final LinearLayout rootView;

  @NonNull
  public final EditText addEditView;

  @NonNull
  public final ImageView addImageView;

  @NonNull
  public final EditText addTitleEditView;

  @NonNull
  public final ExtendedFloatingActionButton btnSave;

  @NonNull
  public final TextView movieRate;

  @NonNull
  public final TextView movieTitle;

  private ActivityAddBinding(@NonNull LinearLayout rootView, @NonNull EditText addEditView,
      @NonNull ImageView addImageView, @NonNull EditText addTitleEditView,
      @NonNull ExtendedFloatingActionButton btnSave, @NonNull TextView movieRate,
      @NonNull TextView movieTitle) {
    this.rootView = rootView;
    this.addEditView = addEditView;
    this.addImageView = addImageView;
    this.addTitleEditView = addTitleEditView;
    this.btnSave = btnSave;
    this.movieRate = movieRate;
    this.movieTitle = movieTitle;
  }

  @Override
  @NonNull
  public LinearLayout getRoot() {
    return rootView;
  }

  @NonNull
  public static ActivityAddBinding inflate(@NonNull LayoutInflater inflater) {
    return inflate(inflater, null, false);
  }

  @NonNull
  public static ActivityAddBinding inflate(@NonNull LayoutInflater inflater,
      @Nullable ViewGroup parent, boolean attachToParent) {
    View root = inflater.inflate(R.layout.activity_add, parent, false);
    if (attachToParent) {
      parent.addView(root);
    }
    return bind(root);
  }

  @NonNull
  public static ActivityAddBinding bind(@NonNull View rootView) {
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

      id = R.id.btnSave;
      ExtendedFloatingActionButton btnSave = ViewBindings.findChildViewById(rootView, id);
      if (btnSave == null) {
        break missingId;
      }

      id = R.id.movieRate;
      TextView movieRate = ViewBindings.findChildViewById(rootView, id);
      if (movieRate == null) {
        break missingId;
      }

      id = R.id.movieTitle;
      TextView movieTitle = ViewBindings.findChildViewById(rootView, id);
      if (movieTitle == null) {
        break missingId;
      }

      return new ActivityAddBinding((LinearLayout) rootView, addEditView, addImageView,
          addTitleEditView, btnSave, movieRate, movieTitle);
    }
    String missingId = rootView.getResources().getResourceName(id);
    throw new NullPointerException("Missing required view with ID: ".concat(missingId));
  }
}