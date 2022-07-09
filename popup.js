// Future JavaScript will go here




Tab_Rx=["facebook","twitter","linkedin"]


function get_Rx(url)
{
    for (let i = 0; i < Tab_Rx.length; i++) {
        if (url.includes(Tab_Rx[i]))
        {
            return Tab_Rx[i]

                }
        
    }
    return '0'


}

function click()
{
 
}


click()