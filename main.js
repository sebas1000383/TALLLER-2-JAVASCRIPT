var data = '{ "simpsons": [{"name":"Lisa", "age":10, "parent":["Homer","Marge"], "hair":"blond", "checked":true, "icon":"simpsonsIcons lisa" },	{ "name":"Bart", "age":9, "parent":["Homer","Marge"], "hair":"blond", "checked":false, "icon":"simpsonsIcons bart" },	{ "name":"Maggie", "age":2, "parent":["Homer","Marge"], "hair":"black", "checked":true },	{ "name":"Patty", "age":37, "parent":["Jacqueline"], "hair":"blond", "checked":true },	{ "name":"Selma", "age":38, "parent":["Jacqueline"], "hair":"blond", "checked":false },	{ "name":"Rod", "age":9, "parent":["Ned"], "hair":"blond", "checked":true },	{ "name":"Todd", "age":8, "parent":["Ned"], "hair":"blond", "checked":true },	{ "name":"Abe", "age":65, "parent":["Root"], "hair":"none", "checked":true },	{ "name":"Mona", "age":65, "parent":["Root"], "hair":"none", "checked":false },	{ "name":"Jacqueline", "age":63, "parent":["Root"], "hair":"none", "checked":true },	{ "name":"Homer", "age":42, "parent":["Abe","Mona"], "hair":"none", "checked":false, "icon":"simpsonsIcons homer", "enabled": false },	{ "name":"Marge", "age":35, "parent":["Jacqueline"], "hair":"blond", "checked":true, "icon":"simpsonsIcons marge" },	{ "name":"Ned", "age":40, "parent":["Root"], "hair":"none", "checked":true },	{ "name":"Apu", "age":40, "parent":["Root"], "hair":"black", "checked":true },	{ "name":"Manjula", "age":40, "parent":["Apu"], "hair":"brown", "checked":false}]}';
var datosObject=JSON.parse(data);
function cargarPunto1() 
{
    let tabla = document.getElementById("tablaDatos").getElementsByTagName('tbody')[0];
    for (var i = 0; i < datosObject.simpsons.length; i++) 
    {
        var row = tabla.insertRow(i);
        var cell = row.insertCell(0);
        var cell_1 = row.insertCell(1);
        var cell_2 = row.insertCell(2);
        var cell_3 = row.insertCell(3);
        var cell_4 = row.insertCell(4);
        var cell_5 = row.insertCell(5);
        var cell_6 = row.insertCell(6);
        cell.innerHTML = datosObject.simpsons[i].name;
        cell_1.innerHTML = datosObject.simpsons[i].age;
        cell_2.innerHTML = datosObject.simpsons[i].parent;
        cell_3.innerHTML = datosObject.simpsons[i].hair;
        cell_4.innerHTML = datosObject.simpsons[i].checked;
        cell_5.innerHTML = datosObject.simpsons[i].icon;
        cell_6.innerHTML = datosObject.simpsons[i].enabled;
    }
}
function cargarPunto2() 
{
    let tabla = document.getElementById("tablaDatos1").getElementsByTagName('tbody')[0];
    for (var i = 0; i < datosObject.simpsons.length; i++) 
    {
        var row = tabla.insertRow(i);
        var cell = row.insertCell(0);
        var cell_1 = row.insertCell(1);        
        cell.innerHTML = datosObject.simpsons[i].name;
        cell_1.innerHTML = datosObject.simpsons[i].parent.length;        
    }
}
function cargarPunto3() 
{         
    let nombre = document.getElementById('input1').value;    
    let tabla = document.getElementById("tablaDatos2").getElementsByTagName('tbody')[0];       
    for (var i = 0; i < datosObject.simpsons.length; i++) 
    {
        if(nombre=="")
        {
            alert("No se encontraron resultados");
            break;
        }
        if (datosObject.simpsons[i].name.search(nombre) > -1)
        {
            
        var row = tabla.insertRow();
        var cell = row.insertCell(0);
        var cell_1 = row.insertCell(1);
        var cell_2 = row.insertCell(2);
        var cell_3 = row.insertCell(3);
        var cell_4 = row.insertCell(4);
        var cell_5 = row.insertCell(5);
        var cell_6 = row.insertCell(6);
        cell.innerHTML = datosObject.simpsons[i].name;
        cell_1.innerHTML = datosObject.simpsons[i].age;
        cell_2.innerHTML = datosObject.simpsons[i].parent;
        cell_3.innerHTML = datosObject.simpsons[i].hair;
        cell_4.innerHTML = datosObject.simpsons[i].checked;
        cell_5.innerHTML = datosObject.simpsons[i].icon;
        cell_6.innerHTML = datosObject.simpsons[i].enabled
        } 
        

    
                  
    }
    
}
function cargarPunto4() 
{         
     hair = document.getElementById('input2').value;    
    let tabla = document.getElementById("tablaDatos3").getElementsByTagName('tbody')[0];       
    for (var i = 0; i < datosObject.simpsons.length; i++) 
    {
        if(hair=="")
        {
            alert("No se encontraron resultados");
            break;
        }
        if (datosObject.simpsons[i].hair.search(hair) > -1)
        {
            
        var row = tabla.insertRow();
        var cell = row.insertCell(0);
        var cell_1 = row.insertCell(1);
        var cell_2 = row.insertCell(2);
        var cell_3 = row.insertCell(3);
        var cell_4 = row.insertCell(4);
        var cell_5 = row.insertCell(5);
        var cell_6 = row.insertCell(6);
        cell.innerHTML = datosObject.simpsons[i].name;
        cell_1.innerHTML = datosObject.simpsons[i].age;
        cell_2.innerHTML = datosObject.simpsons[i].parent;
        cell_3.innerHTML = datosObject.simpsons[i].hair;
        cell_4.innerHTML = datosObject.simpsons[i].checked;
        cell_5.innerHTML = datosObject.simpsons[i].icon;
        cell_6.innerHTML = datosObject.simpsons[i].enabled
        } 
        
    
                  
    }
}