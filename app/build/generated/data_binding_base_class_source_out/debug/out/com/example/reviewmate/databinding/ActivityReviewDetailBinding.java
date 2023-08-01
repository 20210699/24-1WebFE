// Generated by view binder compiler. Do not edit!
package com.example.reviewmate.databinding;

import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.ImageView;
import android.widget.LinearLayout;
import android.widget.TextView;
import androidx.annotation.NonNull;
import androidx.annotation.Nullable;
import androidx.viewbinding.ViewBinding;
import androidx.viewbinding.ViewBindings;
import com.example.reviewmate.R;
import java.lang.NullPointerException;
import java.lang.Override;
import java.lang.String;

public final class ActivityReviewDetailBinding implements ViewBinding {
  @NonNull
  private final LinearLayout rootView;

  @NonNull
  public final ImageView addImageView;

  @NonNull
  public final TextView content;

  @NonNull
  public final TextView movieRate;

  @NonNull
  public final TextView movieTitle;

  @NonNull
  public final TextView reviewDate;

  @NonNull
  public final TextView reviewTitle;

  @NonNull
  public final TextView userEmail;

  private ActivityReviewDetailBinding(@NonNull LinearLayout rootView,
      @NonNull ImageView addImageView, @NonNull TextView content, @NonNull TextView movieRate,
      @NonNull TextView movieTitle, @NonNull TextView reviewDate, @NonNull TextView reviewTitle,
      @NonNull TextView userEmail) {
    this.rootView = rootView;
    this.addImageView = addImageView;
    this.content = content;
    this.movieRate = movieRate;
    this.movieTitle = movieTitle;
    this.reviewDate = reviewDate;
    this.reviewTitle = reviewTitle;
    this.userEmail = userEmail;
  }

  @Override
  @NonNull
  public LinearLayout getRoot() {
    return rootView;
  }

  @NonNull
  public static ActivityReviewDetailBinding inflate(@NonNull LayoutInflater inflater) {
    return inflate(inflater, null, false);
  }

  @NonNull
  public static ActivityReviewDetailBinding inflate(@NonNull LayoutInflater inflater,
      @Nullable ViewGroup parent, boolean attachToParent) {
    View root = inflater.inflate(R.layout.activity_review_detail, parent, false);
    if (attachToParent) {
      parent.addView(root);
    }
    return bind(root);
  }

  @NonNull
  public static ActivityReviewDetailBinding bind(@NonNull View rootView) {
    // The body of this method is generated in a way you would not otherwise write.
    // This is done to optimize the compiled bytecode for size and performance.
    int id;
    missingId: {
      id = R.id.addImageView;
      ImageView addImageView = ViewBindings.findChildViewById(rootView, id);
      if (addImageView == null) {
        break missingId;
      }

      id = R.id.content;
      TextView content = ViewBindings.findChildViewById(rootView, id);
      if (content == null) {
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

      id = R.id.reviewDate;
      TextView reviewDate = ViewBindings.findChildViewById(rootView, id);
      if (reviewDate == null) {
        break missingId;
      }

      id = R.id.reviewTitle;
      TextView reviewTitle = ViewBindings.findChildViewById(rootView, id);
      if (reviewTitle == null) {
        break missingId;
      }

      id = R.id.userEmail;
      TextView userEmail = ViewBindings.findChildViewById(rootView, id);
      if (userEmail == null) {
        break missingId;
      }

      return new ActivityReviewDetailBinding((LinearLayout) rootView, addImageView, content,
          movieRate, movieTitle, reviewDate, reviewTitle, userEmail);
    }
    String missingId = rootView.getResources().getResourceName(id);
    throw new NullPointerException("Missing required view with ID: ".concat(missingId));
  }
}