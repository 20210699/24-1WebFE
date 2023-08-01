package com.example.reviewmate


import android.content.Context
import android.view.LayoutInflater
import android.view.ViewGroup
import androidx.recyclerview.widget.RecyclerView
import com.example.reviewmate.databinding.ItemFeedBinding

class MyFeedViewHolder(val binding: ItemFeedBinding) : RecyclerView.ViewHolder(binding.root)

class MyFeedAdapter(val context: Context, val itemList: MutableList<ItemFeedModel>): RecyclerView.Adapter<MyFeedViewHolder>() {

    override fun onCreateViewHolder(parent: ViewGroup, viewType: Int): MyFeedViewHolder {
        val layoutInflater = LayoutInflater.from(parent.context)
        return MyFeedViewHolder(ItemFeedBinding.inflate(layoutInflater))
    }

    override fun getItemCount(): Int {
        return itemList.size
    }

    override fun onBindViewHolder(holder: MyFeedViewHolder, position: Int) {
        val data = itemList.get(position)

        holder.binding.run {
            itemEmailView.text=data.email
            itemTitleView.text=data.title
            itemContentView.text=data.content
            itemDateView.text=data.date
            itemMovieView.text=data.movie
            itemRateView.text=data.rate
        }

        //스토리지 이미지 다운로드........................
        val imageRef = MyApplication.storage.reference.child("images/${data.docId}.jpg")
        imageRef.downloadUrl.addOnCompleteListener{ task ->
            if(task.isSuccessful){
//                // 다운로드 이미지를 ImageView에 보여줌

                GlideApp.with(context)
                        .load(task.result)
                        .into(holder.binding.itemImageView)
            }
        }
    }

}
