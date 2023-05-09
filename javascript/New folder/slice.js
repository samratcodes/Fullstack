let someStrings=[
    'The sun rose slowly over the horizon, painting the sky with hues of orange and pink.',
   'She sipped her coffee, lost in thought as the world around her bustled with activity.',
    'The old oak tree stood tall and proud, its branches swaying gently in the breeze.',
'The sound of laughter echoed through the empty streets as children played in the park.',
'The scent of fresh flowers filled the air, carried on the gentle wind that blew through the open window.',
'The waves crashed against the shore, their rhythm soothing and hypnotic.',
'He stared out at the vast expanse of ocean, contemplating the mysteries that lay beneath its surface.',
]


someStrings.forEach((value)=>{
    if (value.length>10)  {
        console.log( value.slice(0, 10) + '...')}
else {
     console.log(value)}
}
)
