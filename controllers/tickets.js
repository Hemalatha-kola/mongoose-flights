const ticket = require('../models/ticket');
const Flight = require('../models/flight');

module.exports = {
create,
new: newticket,
addToFlight
};

function addToFlight(req, res){
    Flight.findById(req.params.id, function(error,flight){
      flight.flight.push(req.body.flightId);
      flight.save(function(error){
        res.redirect(`/flights/${flight._id}`);
      });
    });
  }
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