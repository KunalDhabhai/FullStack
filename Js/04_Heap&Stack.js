console.log("---------------------------------04_Heap&Stack.js---------------------------------")
console.log("");
console.log("                                        STACK                                        ");


    /*
     +----------+
     |          |
     +----------+
     +----------+
     |          |
     +----------+
     +----------+
     |          |
     +----------+
      
         STACK

     */

       let U_Name = "Alpha"
       let U_Id = 124

       let Second_U_Name = U_Name;
       let Second_U_Id = U_Id;

       Second_U_Name = "Gamma"
       Second_U_Id = 987
     
      
       console.table([Second_U_Name , Second_U_Id]);
        

       console.table([U_Name , U_Id]);

        // Stack Makes Copy Of Data Not Changes Original One , Changes Occur In Copied Data





console.log("");
console.log("                                        HEAP                                        ");

         /*
    

          +--------------------+
          |                    |
          |                    |
          |                    |
          |                    |
          |                    |
          |                    |
          +--------------------+
        
                   HEAP
        
          */


          let User_One = {
            Name : "kunal",
            Id : 18
          }

          let User_Two = User_One 

          User_Two.Id = 17

          let User_Three = User_Two

          User_Two.Name = "Ashish"

          console.log(User_Three);
          console.log(User_One);
          console.log(User_Two);

        //   In Heap Original Data Is Alloted/Refrenced And Changes Are Done To That only 
          
          