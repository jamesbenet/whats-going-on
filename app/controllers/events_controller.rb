class EventsController < ApplicationController
  before_action :set_event, only: [:show, :update, :destroy]
  # user needs to be logged in to perform these methods
  before_action :authorize_request, only: [:create, :update, :destroy]

  # GET /events
  def index
    @events = Event.all

    render json: @events
  end

  # GET /events/1
  def show
    # this way i can avoid a loop within a loop which would happen
    # above if mapping through all the events and then mapping 
    # through each events comments, I include the comments here
    render json: @event, include: :comments
  end

  # POST /events
  def create
    @event = Event.new(event_params)
    # associates event with user who created it
    # it's also a more secure way to accept form data
    @event.user = @current_user

    if @event.save
      render json: @event, status: :created
    else
      render json: @event.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /events/1
  def update
    if @event.update(event_params)
      render json: @event
    else
      render json: @event.errors, status: :unprocessable_entity
    end
  end

  # DELETE /events/1
  def destroy
    @event.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_event
      @event = Event.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def event_params
      params.require(:event).permit(:date, :event_url, :event_name, :venue_name, :venue_location, :venue_capacity, :venue_image_url, :venue_website, :performer_name, :performer_info, :performer_img_url, :performer_website, :performer_img_url, :performer_url)
    end
end
