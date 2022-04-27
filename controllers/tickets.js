const ticket = require('../models/ticket');


module.exports = {
create,
new: newticket,

};

function create(req, res){
  console.log("retrt");
req.body.flight = req.params.id;
ticket.create(req.body,function(err, ticket){
  res.redirect(`/flights/${req.params.id}`);
})
  
    
  

    
}

function newticket(req, res){
  let id =req.params.id;
  console.log(req.params.id);
    ticket.find({}, function(err,tickets){
        res.render('tickets/new',{
            title:'Add Ticket',
            tickets, id
            
            
        });
        
        
    });
}