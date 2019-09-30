
const Display = function(canvas) {

    this.buffer = document.createElement("canvas").getContext("2d"),
    this.context = canvas.getContext("2d");

    //this.tile_sheet = new Display.TileSheet(16,8) // tile - kafelka

    this.drawMap = function(image, image_columns, map, map_columns, tile_size) {

        for(let index = map.length - 1; index>-1; --index){

            let value = map[index];
            let source_x = (value % image_columns ) * tile_size;
            let source_y = Math.floor(value / image_columns) * tile_size;
            let destination_x = (index % map_columns) * tile_size; 
            let destination_y = Math.floor(index / map_columns) * tile_size;

            this.buffer.drawImage(image, source_x, source_y, tile_size, tile_size, destination_x, destination_y, tile_size, tile_size);
            
        }
    };

    // this.drawPlayer = function(rectangle,color1,color2) {

    //     this.buffer.fillStyle = color1;
    //     this.buffer.fillRect(Math.round(rectangle.x), Math.round(rectangle.y), rectangle.width, rectangle.height);

    //     this.buffer.fillStyle = color2;
    //     this.buffer.fillRect(Math.round(rectangle.x + 2), Math.round(rectangle.y +2 ), rectangle.width - 4, rectangle.height - 4);
    // };



    this.drawObject = function(image, source_x, source_y, destination_x, destination_y, width, height) {

        this.buffer.drawImage(image, source_x, source_y, width, height, Math.round(destination_x), Math.round(destination_y), width, height);height
    };

    
    this.resize = function(width, height, height_width_ratio) {

        if(height/width > height_width_ratio) {  // ratio - stosunek

            this.context.canvas.height = width * height_width_ratio;
            this.context.canvas.width = width;
        }
        else {
            this.context.canvas.height = height;
            this.context.canvas.width = height/height_width_ratio;
        }

        this.context.imageSmoothingEnabled = false; //wygladzanie
    };


};

Display.prototype = {

    constructor: Display,

    render:function() {
        this.context.drawImage(this.buffer.canvas,0,0,this.buffer.canvas.width,this.buffer.canvas.height,0,0,this.context.canvas.width,this.context.canvas.height);
    },
};

// Display.TileSheet = function(tile_size,columns) {

//     this.image = new Image();
//     this.tile_size = tile_size;
//     this.columns = columns;
// };

//Display.TileSheet.prototype = {};