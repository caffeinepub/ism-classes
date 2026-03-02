import List "mo:core/List";
import Runtime "mo:core/Runtime";
import Text "mo:core/Text";
import Principal "mo:core/Principal";

actor {
  type Subject = {
    #maths;
    #science;
    #english;
    #all;
  };

  type Mode = {
    #online;
    #offline;
  };

  type Inquiry = {
    name : Text;
    phone : Text;
    email : ?Text;
    subject : Subject;
    preferredMode : Mode;
    message : Text;
  };

  let inquiries = List.empty<Inquiry>();
  var demoBookingCount = 0;

  public shared ({ caller }) func submitInquiry(name : Text, phone : Text, email : ?Text, subject : Subject, preferredMode : Mode, message : Text) : async () {
    if (name.isEmpty() or phone.isEmpty()) {
      Runtime.trap("Name and phone number are required.");
    };
    let inquiry : Inquiry = {
      name;
      phone;
      email;
      subject;
      preferredMode;
      message;
    };
    inquiries.add(inquiry);
    demoBookingCount += 1;
  };

  public query ({ caller }) func getAllInquiries() : async [Inquiry] {
    inquiries.toArray();
  };

  public query ({ caller }) func getDemoBookingCount() : async Nat {
    demoBookingCount;
  };
};
