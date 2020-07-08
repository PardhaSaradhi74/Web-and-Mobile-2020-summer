package com.example.icp1;

import androidx.appcompat.app.AppCompatActivity;

import android.app.ActionBar;
import android.content.Intent;
import android.os.Bundle;
import android.view.View;
import android.widget.Button;


import com.example.icp1.R;

public class welcomescreen extends AppCompatActivity {
    private Button alogout;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_welcomescreen);
        alogout = findViewById(R.id.wbtn);
        alogout.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                Intent l1 = new Intent(getApplicationContext(), MainActivity.class);
                startActivity(l1);
            }
        });
    }
}