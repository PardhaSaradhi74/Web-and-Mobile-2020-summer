package com.example.icp1;

import androidx.appcompat.app.AppCompatActivity;

import android.app.ActionBar;
import android.content.ContentProviderClient;
import android.content.Intent;
import android.graphics.Color;
import android.graphics.drawable.ColorDrawable;
import android.os.Bundle;
import android.view.View;
import android.widget.Button;
import android.widget.EditText;
import android.widget.TextView;
import android.widget.Toast;

import com.example.icp1.R;

public class MainActivity extends AppCompatActivity {

    private EditText aname;
    private EditText apassword;
    private Button aLogin;
    private String user_name = "Pardhu";
    private String password = "pardhu7177";
    boolean isValid = false;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);
        aname = findViewById(R.id.mname);
        apassword = findViewById(R.id.mpassword);
        aLogin = findViewById(R.id.mbtn);

        aLogin.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {

                String inputName = aname.getText().toString();
                String inputPassword = apassword.getText().toString();
                if(inputName.isEmpty() || inputPassword.isEmpty()) {
                    Toast.makeText(MainActivity.this, "Please enter all the Fields!", Toast.LENGTH_SHORT).show();
                } else {

                    isValid = validate(inputName, inputPassword);

                    if (!isValid) {
                        Toast.makeText(MainActivity.this, "Incorrect credentials!", Toast.LENGTH_SHORT).show();
                    } else {
                        Toast.makeText(MainActivity.this, "Login Successful", Toast.LENGTH_SHORT).show();

                        Intent l2 = new Intent(getApplicationContext(), welcomescreen.class);
                        startActivity(l2);
                    }
                }
            }
        });
    }
    private boolean validate(String Name, String Password){

        return Name.equals(user_name) && Password.equals(password);
    }

}