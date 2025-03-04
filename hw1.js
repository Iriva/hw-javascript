let weakPassword='password';
let strongPassword='Password123';

function checkPassword(pass){
    
    if (pass.length>=8){
        for (let i=0; i <= pass.length; i++){
            if (['0','1','2','3','4','5','6','7','8','9'].includes(pass[i])){
                for (let i=0; i <= pass.length; i++){
                    if (pass[i]===pass[i].toUpperCase()){
                        return 'Strong password! Good job'
                    }
                }
            }
        }
        
    };

    return 'Weak Password, try again'
};


console.log( checkPassword(weakPassword) );
console.log( checkPassword(strongPassword) );

